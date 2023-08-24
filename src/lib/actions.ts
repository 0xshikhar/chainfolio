import { GraphQLClient } from 'graphql-request'
import { getUserQuery, createUserMutation } from '@/graphql'
import { ProjectForm } from '@/common.types'

const isProduction = process.env.NODE_ENV === 'production'
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql'
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'secret'
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL || '' : 'http://localhost:3000'

const client = new GraphQLClient(apiUrl)

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        // making connection to graphql server
        return await client.request(query, variables);
    }
    catch (err) {
        throw err
    }
}

export const getUser = (address: string) => {
    return makeGraphQLRequest(getUserQuery, { address })
}

export const createUser = (name: string, email: string, address: string, avatarUrl: string) => {
    const variables = {
        input: {
            name,
            email,
            address,
            avatarUrl
        }
    }

    return makeGraphQLRequest(createUserMutation, variables)
}

export const uploadImage = async (imagePath: String) => {
    try {
        const response = await fetch(`${serverUrl}/api/upload`, {
            method: 'POST',
            body: JSON.stringify({ path: imagePath })
        })

        return response.json()
    }
    catch (err) {
        throw err;
    }

}

export const createNewProject = async (form: ProjectForm,
    creatorId: string, token: string) => {
    const imageUrl = await uploadImage(form.image)

    if (imageUrl.url) {
        const variables = {
            input: {
                ...form,
                image: imageUrl.url,
                createdBy: {
                    link: creatorId
                }
            }
        }
        // return makeGraphQLRequest(createProjectMutation, variables)
    }
}

// fetch all projects
// export const fetchAllProjects = async