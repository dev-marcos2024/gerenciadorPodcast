import { repositoryPodiscat } from "../data/podcastData";



export const serviceFilterEpsodes = async (podcastName: string) => {
    const data = await repositoryPodiscat(podcastName);

    return data
}