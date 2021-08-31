export interface ReleaseTableDataInterface {
  NUMBER?: number;
  "VIEW_STATUS"?: number;
  "REVIEW_STATUS"?: number;
  "STATUS"?: number;
  "CreateDate"?: string;
  "REQUESTED_DT"?: string;
  "DATEOFSERVICE"?: string;
  "REQUESTED_DT_FULL"?: string;
  "NAME"?: string;
  "LNAME"?: string;
  "DOB"?: string;
  "UpdateDate"?: string;
  "patientID"?: number;
  "ReleasedDate"?: string;
  "testsOrdered"?: Array<any>
}

export interface SavedOrdersDataInterface {
  ID: number,
  FNAME: string,
  LNAME: string,
  status: number,
  DOB: string,
  createdAt: string,
  updatedAt: string
}

export interface TestResults {

  ID: number,
  FNAME: string,
  LNAME: string,
  MNAME: string,
  PhoneNum: string,
  STREET: string,
  CITY: string,
  STATE: string,
  ZIP: string,
  SEX: string,
  Street1: string,
  DOB: string,
  RELATION: string,
  "S_RELATION": string,
  "PRIM_INS": string,
  "PRIM_INS_NUM": string,
  "PRI_INS_GRP": string,
  "SEC_INS": string,
  "SEC_INS_GRP": string,
  "SEC_INS_NUM": string
}

