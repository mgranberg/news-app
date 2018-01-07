
//Modellen för de nyheter jag vill lista
export class NewsItem{
    constructor(
        //classen ges de propertys som behövs.
        public title: string, 
        public description: string,
        //datum sparas i Date format för att man ska kunna jämföra datum.
        public pubDate: Date,
        public link: string,
        public source: string,
        public category?: string
    ){
    }
}