import fs from 'fs'
import path from 'path'
import { PodcastModel } from '../models/podecastModel';


const pathData = path.join(__dirname, "../data/podcast.json");

export const repositoryPodiscat = (podcastName?: string): Promise<PodcastModel[]> => {

    const data = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(data);

    if (podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}

