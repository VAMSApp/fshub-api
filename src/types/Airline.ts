import { Gps, Handles, Link } from './Common';

export type Owner = {
  id: number
  name: string
  bio: any
  handles: Handles
  base: string
  locale: string
  gps: Gps
  timezone: string
  country: string
  is_online: boolean
  online_at: string
  created_at: string
  links: Link[]
}

export type Airline = {
  id: number
  name: string
  abbr: string
  owner: Owner
  handles: Handles
  links: Link[]
}
