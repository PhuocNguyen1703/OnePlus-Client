import { ReactElement } from 'react'

export type FieldError = { field: string; message: string }

type MenuItem = {
  icon: ReactElement<any>
  label: string
  href: string
}

export type MenuItems = {
  title: string
  items: MenuItem[]
}

export interface ApiErrorFromServer {
  payload: {
    errors: {
      error: {
        message: string
        fields?: { message: string }[]
      }
    }
  }
}
