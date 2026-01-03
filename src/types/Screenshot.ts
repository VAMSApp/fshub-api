import { Link } from './Common';

export type Urls = {
  fullsize: string
  thumbnail: string
}

export type Screenshot = {
  id: number
  name: string
  desc: any
  urls: Urls
  created_at: string
  links: Link[]
}
