// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ChinookTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  SequelizeJSON: any;
};

export type Query = {
  albums?: Maybe<Array<Maybe<Album>>>;
  album?: Maybe<Album>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  artist?: Maybe<Artist>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  customer?: Maybe<Customer>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  employee?: Maybe<Employee>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  genre?: Maybe<Genre>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  invoice?: Maybe<Invoice>;
  invoiceItems?: Maybe<Array<Maybe<InvoiceItem>>>;
  invoiceItem?: Maybe<InvoiceItem>;
  mediaTypes?: Maybe<Array<Maybe<MediaType>>>;
  mediaType?: Maybe<MediaType>;
  playlists?: Maybe<Array<Maybe<Playlist>>>;
  playlist?: Maybe<Playlist>;
  tracks?: Maybe<Array<Maybe<Track>>>;
  track?: Maybe<Track>;
};


export type QueryalbumsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryalbumArgs = {
  albumId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};


export type QueryartistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryartistArgs = {
  artistId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};


export type QuerycustomersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerycustomerArgs = {
  customerId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};


export type QueryemployeesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryemployeeArgs = {
  employeeId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};


export type QuerygenresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerygenreArgs = {
  genreId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};


export type QueryinvoicesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryinvoiceArgs = {
  invoiceId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};


export type QueryinvoiceItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryinvoiceItemArgs = {
  invoiceLineId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};


export type QuerymediaTypesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerymediaTypeArgs = {
  mediaTypeId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};


export type QueryplaylistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryplaylistArgs = {
  playlistId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};


export type QuerytracksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerytrackArgs = {
  trackId?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
};

export type Album = {
  albumId: Scalars['Int'];
  title: Scalars['String'];
  artistId: Scalars['Int'];
  tracks?: Maybe<Array<Maybe<Track>>>;
  artist?: Maybe<Artist>;
};


export type AlbumtracksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Track = {
  trackId: Scalars['Int'];
  name: Scalars['String'];
  albumId?: Maybe<Scalars['Int']>;
  mediaTypeId: Scalars['Int'];
  genreId?: Maybe<Scalars['Int']>;
  composer?: Maybe<Scalars['String']>;
  milliseconds: Scalars['Int'];
  bytes?: Maybe<Scalars['Int']>;
  unitPrice: Scalars['String'];
  invoiceItems?: Maybe<Array<Maybe<InvoiceItem>>>;
  mediaType?: Maybe<MediaType>;
  genre?: Maybe<Genre>;
  album?: Maybe<Album>;
  playlists?: Maybe<Array<Maybe<Playlist>>>;
};


export type TrackinvoiceItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type InvoiceItem = {
  invoiceLineId: Scalars['Int'];
  invoiceId: Scalars['Int'];
  trackId: Scalars['Int'];
  unitPrice: Scalars['String'];
  quantity: Scalars['Int'];
  track?: Maybe<Track>;
  invoice?: Maybe<Invoice>;
};

export type Invoice = {
  invoiceId: Scalars['Int'];
  customerId: Scalars['Int'];
  invoiceDate: Scalars['String'];
  billingAddress?: Maybe<Scalars['String']>;
  billingCity?: Maybe<Scalars['String']>;
  billingState?: Maybe<Scalars['String']>;
  billingCountry?: Maybe<Scalars['String']>;
  billingPostalCode?: Maybe<Scalars['String']>;
  total: Scalars['String'];
  invoiceItems?: Maybe<Array<Maybe<InvoiceItem>>>;
  customer?: Maybe<Customer>;
};


export type InvoiceinvoiceItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Customer = {
  customerId: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  supportRepId?: Maybe<Scalars['Int']>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  employee?: Maybe<Employee>;
};


export type CustomerinvoicesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Employee = {
  employeeId: Scalars['Int'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  reportsTo?: Maybe<Scalars['Int']>;
  birthDate?: Maybe<Scalars['String']>;
  hireDate?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  employee?: Maybe<Employee>;
};


export type EmployeecustomersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type EmployeeemployeesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type MediaType = {
  mediaTypeId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  tracks?: Maybe<Array<Maybe<Track>>>;
};


export type MediaTypetracksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Genre = {
  genreId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  tracks?: Maybe<Array<Maybe<Track>>>;
};


export type GenretracksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Playlist = {
  playlistId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type Artist = {
  artistId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  albums?: Maybe<Array<Maybe<Album>>>;
};


export type ArtistalbumsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['SequelizeJSON']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  createAlbum?: Maybe<Album>;
  updateAlbum?: Maybe<Album>;
  deleteAlbum?: Maybe<GenericResponse>;
  createArtist?: Maybe<Artist>;
  updateArtist?: Maybe<Artist>;
  deleteArtist?: Maybe<GenericResponse>;
  createCustomer?: Maybe<Customer>;
  updateCustomer?: Maybe<Customer>;
  deleteCustomer?: Maybe<GenericResponse>;
  createEmployee?: Maybe<Employee>;
  updateEmployee?: Maybe<Employee>;
  deleteEmployee?: Maybe<GenericResponse>;
  createGenre?: Maybe<Genre>;
  updateGenre?: Maybe<Genre>;
  deleteGenre?: Maybe<GenericResponse>;
  createInvoice?: Maybe<Invoice>;
  updateInvoice?: Maybe<Invoice>;
  deleteInvoice?: Maybe<GenericResponse>;
  createInvoiceItem?: Maybe<InvoiceItem>;
  updateInvoiceItem?: Maybe<InvoiceItem>;
  deleteInvoiceItem?: Maybe<GenericResponse>;
  createMediaType?: Maybe<MediaType>;
  updateMediaType?: Maybe<MediaType>;
  deleteMediaType?: Maybe<GenericResponse>;
  createPlaylist?: Maybe<Playlist>;
  updatePlaylist?: Maybe<Playlist>;
  deletePlaylist?: Maybe<GenericResponse>;
  addPlaylistToTrack?: Maybe<GenericResponse>;
  removePlaylistFromTrack?: Maybe<GenericResponse>;
  createTrack?: Maybe<Track>;
  updateTrack?: Maybe<Track>;
  deleteTrack?: Maybe<GenericResponse>;
  addTrackToPlaylist?: Maybe<GenericResponse>;
  removeTrackFromPlaylist?: Maybe<GenericResponse>;
};


export type MutationcreateAlbumArgs = {
  title: Scalars['String'];
  artistId: Scalars['Int'];
};


export type MutationupdateAlbumArgs = {
  albumId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  artistId?: InputMaybe<Scalars['Int']>;
};


export type MutationdeleteAlbumArgs = {
  albumId: Scalars['Int'];
};


export type MutationcreateArtistArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationupdateArtistArgs = {
  artistId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteArtistArgs = {
  artistId: Scalars['Int'];
};


export type MutationcreateCustomerArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  company?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  supportRepId?: InputMaybe<Scalars['Int']>;
};


export type MutationupdateCustomerArgs = {
  customerId?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  supportRepId?: InputMaybe<Scalars['Int']>;
};


export type MutationdeleteCustomerArgs = {
  customerId: Scalars['Int'];
};


export type MutationcreateEmployeeArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  reportsTo?: InputMaybe<Scalars['Int']>;
  birthDate?: InputMaybe<Scalars['String']>;
  hireDate?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};


export type MutationupdateEmployeeArgs = {
  employeeId?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  reportsTo?: InputMaybe<Scalars['Int']>;
  birthDate?: InputMaybe<Scalars['String']>;
  hireDate?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteEmployeeArgs = {
  employeeId: Scalars['Int'];
};


export type MutationcreateGenreArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationupdateGenreArgs = {
  genreId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteGenreArgs = {
  genreId: Scalars['Int'];
};


export type MutationcreateInvoiceArgs = {
  customerId: Scalars['Int'];
  invoiceDate: Scalars['String'];
  billingAddress?: InputMaybe<Scalars['String']>;
  billingCity?: InputMaybe<Scalars['String']>;
  billingState?: InputMaybe<Scalars['String']>;
  billingCountry?: InputMaybe<Scalars['String']>;
  billingPostalCode?: InputMaybe<Scalars['String']>;
  total: Scalars['String'];
};


export type MutationupdateInvoiceArgs = {
  invoiceId?: InputMaybe<Scalars['Int']>;
  customerId?: InputMaybe<Scalars['Int']>;
  invoiceDate?: InputMaybe<Scalars['String']>;
  billingAddress?: InputMaybe<Scalars['String']>;
  billingCity?: InputMaybe<Scalars['String']>;
  billingState?: InputMaybe<Scalars['String']>;
  billingCountry?: InputMaybe<Scalars['String']>;
  billingPostalCode?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteInvoiceArgs = {
  invoiceId: Scalars['Int'];
};


export type MutationcreateInvoiceItemArgs = {
  invoiceId: Scalars['Int'];
  trackId: Scalars['Int'];
  unitPrice: Scalars['String'];
  quantity: Scalars['Int'];
};


export type MutationupdateInvoiceItemArgs = {
  invoiceLineId?: InputMaybe<Scalars['Int']>;
  invoiceId?: InputMaybe<Scalars['Int']>;
  trackId?: InputMaybe<Scalars['Int']>;
  unitPrice?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};


export type MutationdeleteInvoiceItemArgs = {
  invoiceLineId: Scalars['Int'];
};


export type MutationcreateMediaTypeArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationupdateMediaTypeArgs = {
  mediaTypeId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteMediaTypeArgs = {
  mediaTypeId: Scalars['Int'];
};


export type MutationcreatePlaylistArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationupdatePlaylistArgs = {
  playlistId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationdeletePlaylistArgs = {
  playlistId: Scalars['Int'];
};


export type MutationaddPlaylistToTrackArgs = {
  playlistId: Scalars['Int'];
  trackId: Scalars['Int'];
};


export type MutationremovePlaylistFromTrackArgs = {
  playlistId: Scalars['Int'];
  trackId: Scalars['Int'];
};


export type MutationcreateTrackArgs = {
  name: Scalars['String'];
  albumId?: InputMaybe<Scalars['Int']>;
  mediaTypeId: Scalars['Int'];
  genreId?: InputMaybe<Scalars['Int']>;
  composer?: InputMaybe<Scalars['String']>;
  milliseconds: Scalars['Int'];
  bytes?: InputMaybe<Scalars['Int']>;
  unitPrice: Scalars['String'];
};


export type MutationupdateTrackArgs = {
  trackId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  albumId?: InputMaybe<Scalars['Int']>;
  mediaTypeId?: InputMaybe<Scalars['Int']>;
  genreId?: InputMaybe<Scalars['Int']>;
  composer?: InputMaybe<Scalars['String']>;
  milliseconds?: InputMaybe<Scalars['Int']>;
  bytes?: InputMaybe<Scalars['Int']>;
  unitPrice?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteTrackArgs = {
  trackId: Scalars['Int'];
};


export type MutationaddTrackToPlaylistArgs = {
  trackId: Scalars['Int'];
  playlistId: Scalars['Int'];
};


export type MutationremoveTrackFromPlaylistArgs = {
  trackId: Scalars['Int'];
  playlistId: Scalars['Int'];
};

export type GenericResponse = {
  success?: Maybe<Scalars['Boolean']>;
};

  export type QuerySdk = {
      /** undefined **/
  albums: InContextSdkMethod<Query['albums'], QueryalbumsArgs, MeshContext>,
  /** undefined **/
  album: InContextSdkMethod<Query['album'], QueryalbumArgs, MeshContext>,
  /** undefined **/
  artists: InContextSdkMethod<Query['artists'], QueryartistsArgs, MeshContext>,
  /** undefined **/
  artist: InContextSdkMethod<Query['artist'], QueryartistArgs, MeshContext>,
  /** undefined **/
  customers: InContextSdkMethod<Query['customers'], QuerycustomersArgs, MeshContext>,
  /** undefined **/
  customer: InContextSdkMethod<Query['customer'], QuerycustomerArgs, MeshContext>,
  /** undefined **/
  employees: InContextSdkMethod<Query['employees'], QueryemployeesArgs, MeshContext>,
  /** undefined **/
  employee: InContextSdkMethod<Query['employee'], QueryemployeeArgs, MeshContext>,
  /** undefined **/
  genres: InContextSdkMethod<Query['genres'], QuerygenresArgs, MeshContext>,
  /** undefined **/
  genre: InContextSdkMethod<Query['genre'], QuerygenreArgs, MeshContext>,
  /** undefined **/
  invoices: InContextSdkMethod<Query['invoices'], QueryinvoicesArgs, MeshContext>,
  /** undefined **/
  invoice: InContextSdkMethod<Query['invoice'], QueryinvoiceArgs, MeshContext>,
  /** undefined **/
  invoiceItems: InContextSdkMethod<Query['invoiceItems'], QueryinvoiceItemsArgs, MeshContext>,
  /** undefined **/
  invoiceItem: InContextSdkMethod<Query['invoiceItem'], QueryinvoiceItemArgs, MeshContext>,
  /** undefined **/
  mediaTypes: InContextSdkMethod<Query['mediaTypes'], QuerymediaTypesArgs, MeshContext>,
  /** undefined **/
  mediaType: InContextSdkMethod<Query['mediaType'], QuerymediaTypeArgs, MeshContext>,
  /** undefined **/
  playlists: InContextSdkMethod<Query['playlists'], QueryplaylistsArgs, MeshContext>,
  /** undefined **/
  playlist: InContextSdkMethod<Query['playlist'], QueryplaylistArgs, MeshContext>,
  /** undefined **/
  tracks: InContextSdkMethod<Query['tracks'], QuerytracksArgs, MeshContext>,
  /** undefined **/
  track: InContextSdkMethod<Query['track'], QuerytrackArgs, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  createAlbum: InContextSdkMethod<Mutation['createAlbum'], MutationcreateAlbumArgs, MeshContext>,
  /** undefined **/
  updateAlbum: InContextSdkMethod<Mutation['updateAlbum'], MutationupdateAlbumArgs, MeshContext>,
  /** undefined **/
  deleteAlbum: InContextSdkMethod<Mutation['deleteAlbum'], MutationdeleteAlbumArgs, MeshContext>,
  /** undefined **/
  createArtist: InContextSdkMethod<Mutation['createArtist'], MutationcreateArtistArgs, MeshContext>,
  /** undefined **/
  updateArtist: InContextSdkMethod<Mutation['updateArtist'], MutationupdateArtistArgs, MeshContext>,
  /** undefined **/
  deleteArtist: InContextSdkMethod<Mutation['deleteArtist'], MutationdeleteArtistArgs, MeshContext>,
  /** undefined **/
  createCustomer: InContextSdkMethod<Mutation['createCustomer'], MutationcreateCustomerArgs, MeshContext>,
  /** undefined **/
  updateCustomer: InContextSdkMethod<Mutation['updateCustomer'], MutationupdateCustomerArgs, MeshContext>,
  /** undefined **/
  deleteCustomer: InContextSdkMethod<Mutation['deleteCustomer'], MutationdeleteCustomerArgs, MeshContext>,
  /** undefined **/
  createEmployee: InContextSdkMethod<Mutation['createEmployee'], MutationcreateEmployeeArgs, MeshContext>,
  /** undefined **/
  updateEmployee: InContextSdkMethod<Mutation['updateEmployee'], MutationupdateEmployeeArgs, MeshContext>,
  /** undefined **/
  deleteEmployee: InContextSdkMethod<Mutation['deleteEmployee'], MutationdeleteEmployeeArgs, MeshContext>,
  /** undefined **/
  createGenre: InContextSdkMethod<Mutation['createGenre'], MutationcreateGenreArgs, MeshContext>,
  /** undefined **/
  updateGenre: InContextSdkMethod<Mutation['updateGenre'], MutationupdateGenreArgs, MeshContext>,
  /** undefined **/
  deleteGenre: InContextSdkMethod<Mutation['deleteGenre'], MutationdeleteGenreArgs, MeshContext>,
  /** undefined **/
  createInvoice: InContextSdkMethod<Mutation['createInvoice'], MutationcreateInvoiceArgs, MeshContext>,
  /** undefined **/
  updateInvoice: InContextSdkMethod<Mutation['updateInvoice'], MutationupdateInvoiceArgs, MeshContext>,
  /** undefined **/
  deleteInvoice: InContextSdkMethod<Mutation['deleteInvoice'], MutationdeleteInvoiceArgs, MeshContext>,
  /** undefined **/
  createInvoiceItem: InContextSdkMethod<Mutation['createInvoiceItem'], MutationcreateInvoiceItemArgs, MeshContext>,
  /** undefined **/
  updateInvoiceItem: InContextSdkMethod<Mutation['updateInvoiceItem'], MutationupdateInvoiceItemArgs, MeshContext>,
  /** undefined **/
  deleteInvoiceItem: InContextSdkMethod<Mutation['deleteInvoiceItem'], MutationdeleteInvoiceItemArgs, MeshContext>,
  /** undefined **/
  createMediaType: InContextSdkMethod<Mutation['createMediaType'], MutationcreateMediaTypeArgs, MeshContext>,
  /** undefined **/
  updateMediaType: InContextSdkMethod<Mutation['updateMediaType'], MutationupdateMediaTypeArgs, MeshContext>,
  /** undefined **/
  deleteMediaType: InContextSdkMethod<Mutation['deleteMediaType'], MutationdeleteMediaTypeArgs, MeshContext>,
  /** undefined **/
  createPlaylist: InContextSdkMethod<Mutation['createPlaylist'], MutationcreatePlaylistArgs, MeshContext>,
  /** undefined **/
  updatePlaylist: InContextSdkMethod<Mutation['updatePlaylist'], MutationupdatePlaylistArgs, MeshContext>,
  /** undefined **/
  deletePlaylist: InContextSdkMethod<Mutation['deletePlaylist'], MutationdeletePlaylistArgs, MeshContext>,
  /** undefined **/
  addPlaylistToTrack: InContextSdkMethod<Mutation['addPlaylistToTrack'], MutationaddPlaylistToTrackArgs, MeshContext>,
  /** undefined **/
  removePlaylistFromTrack: InContextSdkMethod<Mutation['removePlaylistFromTrack'], MutationremovePlaylistFromTrackArgs, MeshContext>,
  /** undefined **/
  createTrack: InContextSdkMethod<Mutation['createTrack'], MutationcreateTrackArgs, MeshContext>,
  /** undefined **/
  updateTrack: InContextSdkMethod<Mutation['updateTrack'], MutationupdateTrackArgs, MeshContext>,
  /** undefined **/
  deleteTrack: InContextSdkMethod<Mutation['deleteTrack'], MutationdeleteTrackArgs, MeshContext>,
  /** undefined **/
  addTrackToPlaylist: InContextSdkMethod<Mutation['addTrackToPlaylist'], MutationaddTrackToPlaylistArgs, MeshContext>,
  /** undefined **/
  removeTrackFromPlaylist: InContextSdkMethod<Mutation['removeTrackFromPlaylist'], MutationremoveTrackFromPlaylistArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Chinook"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
