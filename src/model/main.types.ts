export interface RequestsInterface {
  [name: string]: RequestType;
}

export interface RequestType {
  fetchUrl: string;
  title: string;
}

export interface MovieInterface {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

// export interface ListItems {
//   id: string;
//   display: string;
//   media?: Media[];
// }

// export interface ImgInterface {
//   preview: string;
//   data: File;
// }

// export interface Media {
//   id: string;
//   display: string;
//   type: string;
//   uri: string;
//   displayDetails?: DisplayDetails[];
// }

// interface DisplayDetails {
//   coords: number[];
//   entityId: string;
//   mediaEntity: string;
//   shape: string;
// }

// export type Methods =
//   | 'head'
//   | 'options'
//   | 'put'
//   | 'post'
//   | 'patch'
//   | 'delete'
//   | 'get';

// export interface ParkingDataResponseInterface {
//   assetId: string;
//   carPark: string;
//   carParkDeck: string;
//   checkInTime: string;
//   endTime: string;
//   parkingBay: string;
//   visitorPin: string;
// }

// export interface LocationParkingInterface {
//   pathname: string;
//   state: ParkingStateInterface;
// }
// interface EvidenceInterface {
//   assetId: string;
//   bearerToken: string;
//   scanId: string;
//   vehicleRegistrationNumber: {
//     countryId: string;
//     number: string;
//   };
// }

// export interface ParkingStateInterface {
//   evidence: EvidenceInterface;
//   companyHostRequired: boolean;
//   nameRequired: boolean;
//   timePeriodMinutes: number[];
// }

// export interface GeneralIdDisplayObjectInterface {
//   display: string;
//   id: string;
// }
// export interface IFormInputs {
//   bayId: string;
//   carPlates: string;
//   countryId: string;
// }

// export interface ParkingPostObjectInterface {
//   companyHostId?: string;
//   visitorPin?: string;
//   firstName?: string;
//   lastName?: string;
//   minutes: number | null;
//   evidence: {
//     assetId: string;
//     bearerToken: string;
//     scanId: string;
//     vehicleRegistrationNumber: {
//       countryId: string;
//       number: string;
//     };
//   };
// }

// export interface GetParkingObject {
//   assetId: string;
//   countryId?: string;
//   number?: string;
//   visitorPin?: string;
// }
