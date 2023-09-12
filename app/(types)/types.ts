export type ProductInfo = {
  name : string;
  price : number;
  volume : string;
  BPOM? : string;
  image : {
    src : string;
    alt : string;
    dimension : {
      w: number;
      h: number;
    }
  };
  description : {
    promotional: string
    general: string
    informational: {
      top_note: string
      middle_note: string
      bottom_note: string
    }  
  }
}
