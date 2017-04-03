export interface EstimateComplete {
  estimateId: string;
  estimateCode: string;
  reference: string;
  plate: string;
  vin: string;
  km: string;
  lastEmitDate: string;
  estimateProfileId: string;
  functionalGroupId: string;
  stateName: string;
  dateCreated: string;
  dateModification: string;
  billingCode;
  situation;
  model;
  make;
  omitResult;
  isSelected: boolean;
  isNewEstimate: boolean;
  makeName: string;
  modelName: string;
  hasModelData: boolean;
  canBeSendToUpdate: boolean;
  calculated: boolean;
  isBillingCodeChanged: boolean;
}


export type Estimate = Partial<EstimateComplete>;