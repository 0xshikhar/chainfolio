import { ethers } from 'ethers';
import { contractAddress, abi } from '@/constants/blockchain'
import { uploadImage } from '@/lib/actions'
import { enumCategoryFilters } from '@/constants'
import { useProvider } from 'wagmi'
declare let window: any;
type ChainIdType = 5 | 421613 | 84531 | 80001 | 43113;

export const convertBigNumber = (hex: any) => {
    const createBigNumber = ethers.BigNumber.from(hex); // Create a BigNumber
    const createNumber = createBigNumber.toNumber();
    return createNumber;
}

export const createNewProject = async (form: any, chainId: ChainIdType, address: String) => {
    console.log("createNewProject", form)
    console.log("contractAddress", contractAddress[chainId])
    const imageUrl = await uploadImage(form.image)
    console.log("imageUrl", imageUrl.url)
    console.log("form", form)
    const enumValue = enumCategoryFilters[form.category];
    console.log("enumValue", enumValue)

    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const chainFolioContract = new ethers.Contract(contractAddress[chainId], abi, signer);

            // let newProjectTx = await chainFolioContract.addProject(form.title, form.tagline, form.description, form.liveSiteUrl, form.githubUrl, form.contractUrl, imageUrl.url, form.category);
            let newProjectTx = await chainFolioContract.addProject(form.title, form.tagline, form.description, form.liveSiteUrl, form.githubUrl, form.contractUrl, imageUrl.url, enumValue);
            console.log("Add New Project Transaction", newProjectTx)
        }
    }
    catch (error) {
        console.log("createNewProject: Ethereum object does not exist")
    }
}

export const fetchAllProjects = async (chainId: ChainIdType) => {
    if (!chainId) {
        chainId = 5;
    }
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const chainFolioContract = new ethers.Contract(contractAddress[chainId], abi, signer);

            let allProjects = await chainFolioContract.getAllProjects();
            return allProjects;
        }
    }
    catch (error) {
        console.log("Ethereum object does not exist")
    }
}

export const getProjectId = async (id: number, chainId: ChainIdType) => {
    if (!chainId) {
        chainId = 5;
    }
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const chainFolioContract = new ethers.Contract(contractAddress[chainId], abi, signer);

            let projectDetails = await chainFolioContract.getProjectById(id);
            return projectDetails;
        }
    }
    catch (error) {
        console.log("Ethereum object does not exist")
    }
}

export const getProjectByUser = async (address: string, chainId: ChainIdType) => {
    if (!chainId) {
        chainId = 5;
    }
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const chainFolioContract = new ethers.Contract(contractAddress[chainId], abi, signer);

            let projectDetails = await chainFolioContract.getProjects(address);
            console.log("projectDetails", projectDetails)
            return projectDetails;
        }
    }
    catch (error) {
        console.log("Ethereum object does not exist")
    }
}


// export const getChainId = async () => {
//     const provider = useProvider();
//     console.log("provider", provider._network.chainId)
//     return provider._network.chainId
// }