import React from "react";
import WorkDaysWindow from "../WorkDaysWindow/WorkDaysWindow";
import { CardHeader, Box, CardMedia, Typography } from "@mui/material";
import css from "./OurFriendsItem.module.css";
import { defaultImageUrl } from "../../../shared/helpers/constants";

const OurFriendsItem = ({
  _id,
  url,
  title,
  imageUrl,
  workDays,
  address,
  addressUrl,
  email,
  phone,
}) => {
  const hasAddress = Boolean(address);
  const hasEmail = Boolean(email);
  const hasPhone = Boolean(phone);

  return (
    <li key={_id} className={css.cardItem}>
      <CardHeader
        sx={{ padding: 0 }}
        title={
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={css.friendLink}
          >
            {title}
          </a>
        }
      />
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Box sx={{ flex: 1 }}>
          <CardMedia
            className={`${css.cardMediaStyle} ${css.responsiveImage}`}
            image={imageUrl || defaultImageUrl}
            title={title}
          />
        </Box>
        <Box sx={{ flex: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {!workDays && (
              <Typography
                variant="body1"
                component="p"
                gutterBottom
                className={css.typoStyle}
              >
                <strong>{"Time"}:</strong> <br /> {"day and night"}
              </Typography>
            )}
            {workDays && <WorkDaysWindow workDays={workDays} />}
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={css.typoStyle}
              sx={{
                "&:hover": {
                  color: "#54ADFF",
                },
                ...(hasAddress
                  ? {}
                  : {
                      "&:hover": {
                        color: "inherit",
                      },
                    }),
              }}
            >
              <strong>{"Address"}:</strong>
              <br />
              {hasAddress ? (
                <a href={addressUrl} target="_blank" rel="noreferrer">
                  {address}
                </a>
              ) : (
                "website only"
              )}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={css.typoStyle}
              sx={{
                "&:hover": {
                  color: "#54ADFF",
                },
                ...(hasEmail
                  ? {}
                  : {
                      "&:hover": {
                        color: "inherit",
                      },
                    }),
              }}
            >
              <strong>{"Email"}:</strong> <br />
              {hasEmail ? (
                <a href={`mailto:${email}`}>{email}</a>
              ) : (
                "website only"
              )}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={css.typoStyle}
              sx={{
                "&:hover": {
                  color: "#54ADFF",
                },
                ...(hasPhone
                  ? {}
                  : {
                      "&:hover": {
                        color: "inherit",
                      },
                    }),
              }}
            >
              <strong>{"Phone"}:</strong> <br />
              {hasPhone ? <a href={`tel:${phone}`}>{phone}</a> : "email only"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </li>
  );
};

export default OurFriendsItem;
