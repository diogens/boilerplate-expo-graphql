/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryLaunchesPast
// ====================================================

export interface QueryLaunchesPast_launchesPast_telemetry {
  __typename: "LaunchTelemetry";
  flight_club: string | null;
}

export interface QueryLaunchesPast_launchesPast_launch_site {
  __typename: "LaunchSite";
  site_name: string | null;
  site_name_long: string | null;
}

export interface QueryLaunchesPast_launchesPast_links {
  __typename: "LaunchLinks";
  article_link: string | null;
  video_link: string | null;
  wikipedia: string | null;
  reddit_media: string | null;
  flickr_images: (string | null)[] | null;
  presskit: string | null;
}

export interface QueryLaunchesPast_launchesPast {
  __typename: "Launch";
  id: string | null;
  mission_name: string | null;
  launch_date_local: any | null;
  launch_date_utc: any | null;
  telemetry: QueryLaunchesPast_launchesPast_telemetry | null;
  launch_year: string | null;
  launch_success: boolean | null;
  launch_site: QueryLaunchesPast_launchesPast_launch_site | null;
  launch_date_unix: any | null;
  details: string | null;
  links: QueryLaunchesPast_launchesPast_links | null;
}

export interface QueryLaunchesPast {
  launchesPast: QueryLaunchesPast_launchesPast[];
}
