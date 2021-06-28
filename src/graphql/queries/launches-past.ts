import { gql } from '@apollo/client'

export const QUERY_LAUNCHES_PAST = gql`
  query QueryLaunchesPast {
    launchesPast {
      id
      mission_name
      launch_date_local
      launch_date_utc
      telemetry {
        flight_club
      }
      launch_year
      launch_success
      launch_site {
        site_name
        site_name_long
      }
      launch_date_unix
      details
      links {
        article_link
        video_link
        wikipedia
        reddit_media
        flickr_images
        presskit
      }
    }
  }
`
