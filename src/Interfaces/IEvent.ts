export interface IUrl {
  href: string;
  text: string;
}

export default interface IEvent {
  startDt: string;
  title: string;
  url?: IUrl;
  desc: string;
  location: string;
}
