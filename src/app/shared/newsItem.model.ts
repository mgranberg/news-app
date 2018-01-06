export class NewsItem{
    constructor(
        public title: string, 
        public description: string,
        public pubDate: Date,
        public link: string,
        public source: string,
        public category?: string
    ){
    }
}