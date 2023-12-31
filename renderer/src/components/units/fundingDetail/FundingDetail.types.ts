export interface Menu {
  id: number
  attendantId: number
  userId: number
  count: number
  description: string
  menuName: string

  menuPrice: number
}

export interface AttendantInfoType {
  description: string
  id: number
  userId: number
  userName: string
  fundingId: number
  createdAt: string
  hasPaid: boolean
  menuInfo: Menu[]
}

export interface InfoPropsType {
  item: AttendantInfoType
  attendData: AttendantInfoType[]
  user: {
    id: number
    name: string
  }
}

export interface billPriceInfoType {
  hasPaid: boolean
  totalPrice: number
  userId: number
  userName: string
}

export interface billType {
  bankAccount: string
  bankName: string
  createdAt: string
  deliveryFee: number
  fundingId: number
  id: number
  priceInfo: billPriceInfoType[]
}
