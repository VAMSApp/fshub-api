import { Gps, Handles, Link } from './Common';

export type Pilot = {
  id: number
  name: string
  base: string
  locale: string
  gps: Gps
  is_online: boolean
  online_at: string
  bio?: string
  handles?: Handles
  timezone?: string
  country?: string
  created_at?: string
  links?: Link[]
}

export type CurrentPilot = Pilot & {
  discord_id?: number
}
