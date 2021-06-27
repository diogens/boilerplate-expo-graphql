/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryLaunchesPast
// ====================================================

export interface QueryLaunchesPast_launchesPast_launch_site {
  __typename: "LaunchSite";
  site_name_long: string | null;
}

export interface QueryLaunchesPast_launchesPast_links {
  __typename: "LaunchLinks";
  article_link: string | null;
  video_link: string | null;
}

export interface QueryLaunchesPast_launchesPast_rocket_first_stage_cores_core {
  __typename: "Core";
  reuse_count: number | null;
  status: string | null;
}

export interface QueryLaunchesPast_launchesPast_rocket_first_stage_cores {
  __typename: "LaunchRocketFirstStageCore";
  flight: number | null;
  core: QueryLaunchesPast_launchesPast_rocket_first_stage_cores_core | null;
}

export interface QueryLaunchesPast_launchesPast_rocket_first_stage {
  __typename: "LaunchRocketFirstStage";
  cores: (QueryLaunchesPast_launchesPast_rocket_first_stage_cores | null)[] | null;
}

export interface QueryLaunchesPast_launchesPast_rocket_second_stage_payloads {
  __typename: "Payload";
  payload_type: string | null;
  payload_mass_kg: number | null;
  payload_mass_lbs: number | null;
}

export interface QueryLaunchesPast_launchesPast_rocket_second_stage {
  __typename: "LaunchRocketSecondStage";
  payloads: (QueryLaunchesPast_launchesPast_rocket_second_stage_payloads | null)[] | null;
}

export interface QueryLaunchesPast_launchesPast_rocket {
  __typename: "LaunchRocket";
  rocket_name: string | null;
  first_stage: QueryLaunchesPast_launchesPast_rocket_first_stage | null;
  second_stage: QueryLaunchesPast_launchesPast_rocket_second_stage | null;
}

export interface QueryLaunchesPast_launchesPast_ships {
  __typename: "Ship";
  name: string | null;
  home_port: string | null;
  image: string | null;
}

export interface QueryLaunchesPast_launchesPast {
  __typename: "Launch";
  mission_name: string | null;
  launch_date_local: any | null;
  launch_site: QueryLaunchesPast_launchesPast_launch_site | null;
  links: QueryLaunchesPast_launchesPast_links | null;
  rocket: QueryLaunchesPast_launchesPast_rocket | null;
  ships: (QueryLaunchesPast_launchesPast_ships | null)[] | null;
}

export interface QueryLaunchesPast {
  launchesPast: QueryLaunchesPast_launchesPast[];
}
