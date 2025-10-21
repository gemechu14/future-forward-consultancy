import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define types for our API responses
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export interface Industry {
  id: number;
  name: string;
  description: string;
  icon: string;
  services: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

// Create the API slice
export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  tagTypes: ['Services', 'Industries'],
  endpoints: (builder) => ({
    // Get all services
    getServices: builder.query<Service[], void>({
      query: () => 'services',
      providesTags: ['Services'],
    }),
    
    // Get all industries
    getIndustries: builder.query<Industry[], void>({
      query: () => 'industries',
      providesTags: ['Industries'],
    }),
    
    // Send contact form
    sendContact: builder.mutation<ContactResponse, ContactFormData>({
      query: (contactData) => ({
        url: 'contact',
        method: 'POST',
        body: contactData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetServicesQuery,
  useGetIndustriesQuery,
  useSendContactMutation,
} = servicesApi;
