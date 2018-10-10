export class DPAllFailedTriggersDetail {
  InterfaceQueueName: string;
  TruckCenterID: number;
  TruckCenter: string;
  RequestTypeID: number;
  PK: number;
  Parameter: number;
  UserID: number;
  AddedOn: string;
}
export class DPAllTriggersByInterfaceQueueName {
  InterfaceQueueName: string;
  Number: number;
}
export class DPAllTriggersByTC {
  TruckCenter: string;
  Number: number;
  TruckCenterID: number;
}
export class DPAlltriggersSummary {
  InterfaceQueueName: string;
  TruckCenterID: number;
  NumberOfMsgOut: number;
  StatisticDate: string;
}
export class DPFailedTriggersDetail {
  InterfaceQueueName: string;
  TruckCenterID: number;
  TruckCenter: string;
  NumberOfMsgFailed: number;
  StatisticDate: string;
}
export class DPFailedtriggersSummary {
  TruckCenterID: number;
  NumberOfMsgFailed: number;
  StatisticDate: string;
  TruckCenter: string;
}
export class DPTruckCenter {
  TruckCenterID: number;
  TruckCenter: string;
  Enviornment: string;
}
