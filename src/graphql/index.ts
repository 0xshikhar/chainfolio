export const getUserQuery = `
query getUser($address: String!) {
    user(by: { address: $address }) {
    id
    name
    email
    description
    avatarUrl
    githubUrl
    linkedinUrl
    twitterUrl
    }
}   
`

export const createUserMutation = `
    mutation createUser($input: CreateUserInput!) {
        createUser(input: $input) {
            user {
                name 
                email
                address
                description
                avatarUrl
                githubUrl
                linkedinUrl
                twitterUrl
                id
            }
        }
    }
`