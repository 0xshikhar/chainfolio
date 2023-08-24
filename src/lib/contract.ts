import { ethers } from 'ethers';
import { contractAddress, abi } from '@/constants/blockchain'
declare let window: any;
type ChainIdType = 5 | 421613 | 84531 | 80001 | 43113;

export const createNewProject = async (form: any, chainId: ChainIdType, address: String) => {
    console.log("createNewProject", form)
    console.log("contractAddress", contractAddress[chainId])
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const chainFolioContract = new ethers.Contract( contractAddress[5], abi, signer);

            let newProjectTx = await chainFolioContract.addProject(form.title, "my awe project", form.description);
            console.log("Add New Project Transaction", newProjectTx)
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