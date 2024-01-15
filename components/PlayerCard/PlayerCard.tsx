import {
  Typography,
  Tooltip,
  Modal,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { Players } from "../../API";

export type TPlayer = {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  team: string;
  number: number;
  position: string;
  shoots: string;
  birth_year: number;
  linkToEliteProspects?: string;
  linkToTeamSite?: string;
};

const PlayerCard = ({ player }: { player: Players | null }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const popupOpen = () => setIsOpen(true);
  const popupClose = () => setIsOpen(false);

  return (
    <div>
      <Tooltip title={player?.firstName + " " + player?.lastName}>
        <Card sx={{ width: 200, margin: 0.2 }} onClick={popupOpen}>
          <CardActionArea>
            {player?.playerPhoto != null && player?.playerPhoto != "" ? (
              <CardMedia
                height="300"
                component="img"
                image={
                  "https://kiekkoprojekti-images.s3.eu-central-1.amazonaws.com/" +
                  player?.playerPhoto
                }
                alt={player?.firstName + " " + player?.lastName}
              />
            ) : (
              <CardMedia
                height="300"
                component="img"
                image={
                  "https://kiekkoprojekti-images.s3.eu-central-1.amazonaws.com/ei-kuvaa.png"
                }
                alt={player?.firstName + " " + player?.lastName}
              />
            )}
            <CardContent>
              <Typography
                variant="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                {player?.playerNumber}
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                {player?.firstName}
                <br />
                {player?.lastName}
              </Typography>
              {/* <Typography
                variant="h3"
                sx={{ fontSize: "24px", fontWeight: "300" }}
              >
                #{player?.playerNumber}
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: "24px", fontWeight: "300" }}
              >
                {player?.playerTeam}
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Tooltip>
      <Modal open={isOpen} onClose={popupClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            overflow: "auto",
            outline: "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 2,
            width: "90%",
            maxWidth: 500,
            maxHeight: { xs: "100%", sm: "50%" },
            borderRadius: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            {player?.playerPhoto != null ? (
              <CardMedia
                component="img"
                image={
                  "https://kiekkoprojekti-images.s3.eu-central-1.amazonaws.com/" +
                  player?.playerPhoto
                }
                alt={player?.firstName + " " + player?.lastName}
                sx={{
                  width: "200px",
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "30px",
                }}
              />
            ) : (
              <CardMedia
                height="300"
                component="img"
                image={
                  "https://kiekkoprojekti-images.s3.eu-central-1.amazonaws.com/ei-kuvaa.png"
                }
                alt={player?.firstName + " " + player?.lastName}
              />
            )}
            <Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: "30px", fontWeight: "600" }}
                >
                  {"\n"}
                  {player?.firstName} {player?.lastName}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    marginTop: "10px",
                  }}
                >
                  {"Joukkue: " + player?.playerTeam}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                  }}
                >
                  {"Pelipaikka: " + player?.playerPosition}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "18px", fontWeight: "300" }}
                >
                  {"Kätisyys: " + player?.playerShoots}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "18px", fontWeight: "300" }}
                >
                  {"Syntymävuosi: " + player?.birthYear}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  {player?.linkToEliteProspects && (
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "18px", fontWeight: "300" }}
                    >
                      <a
                        href={
                          player?.linkToEliteProspects.startsWith("http")
                            ? player.linkToEliteProspects
                            : `https://${player?.linkToEliteProspects}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        title={
                          player.linkToEliteProspects.startsWith("http")
                            ? player.linkToEliteProspects
                            : `https://${player?.linkToEliteProspects}`
                        }
                      >
                        Elite prospects
                      </a>
                    </Typography>
                  )}

                  {player?.linkToTeamSite && (
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "18px", fontWeight: "300" }}
                    >
                      <a
                        href={
                          player.linkToTeamSite.startsWith("http")
                            ? player.linkToTeamSite
                            : `https://${player.linkToTeamSite}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        title={
                          player.linkToTeamSite.startsWith("http")
                            ? player.linkToTeamSite
                            : `https://${player?.linkToTeamSite}`
                        }
                      >
                        Joukkueen sivu
                      </a>
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default PlayerCard;
