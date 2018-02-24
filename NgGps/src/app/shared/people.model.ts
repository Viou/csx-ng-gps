export class People {
    public name: string;
    public url: string;
    public reprimands: number;
    public likes: number;
    public profileInfo: string;
  
    constructor(name,url, reprimands,likes,profileInfo ) {
        this.name=name;
        this.url=url;
        this.reprimands=reprimands;
        this.likes=likes;
        this.profileInfo=profileInfo;
    }
  }
  