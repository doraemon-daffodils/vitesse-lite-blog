import type { RouteRecordNormalized } from 'vue-router'
import { type ViteSSGContext } from 'vite-ssg'


export type UserModule = (ctx: ViteSSGContext) => void

export interface frontmatter {
  title: string
  date: string
  lang: string
  type: string
}

export declare interface MyRouteRecordNormalized extends RouteRecordNormalized {
  meta: {
    frontmatter: frontmatter
  }
}
