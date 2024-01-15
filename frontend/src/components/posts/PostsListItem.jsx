import { Button, Icon, SvgIcon, Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "aws-amplify";
import { deletePosts, updatePosts } from "../../graphql/mutations";
import { useState } from "react";
import { useFormik } from "formik";

export default function PostsListItem({
  post,
  onDeleteButtonPressed,
  onPostEdited,
}) {
  const [editMode, setEditMode] = useState(false);

  const deletePost = async (id, version) => {
    const postData = {
      id: id,
      _version: version,
    };

    console.log(postData);

    try {
      await API.graphql({
        query: deletePosts,
        variables: { input: postData },
      });
      await onDeleteButtonPressed();
      console.log("deleting succeeded");
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      id: post.id,
      tag: post.tag,
      title: post.title,
      text: post.text,
      image: post.image || "",
      lead: post.lead,
      writer: post.writer,
      _version: post._version,
    },

    onSubmit: async (values) => {
      const postData = {
        id: values.id,
        tag: values.tag,
        title: values.title,
        text: values.text,
        image: values.image,
        lead: values.lead,
        writer: values.writer,
        _version: values._version,
      };

      try {
        console.log(postData);
        await API.graphql({
          query: updatePosts,
          variables: { input: postData },
        });
        await onPostEdited();
        setEditMode(false);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      {editMode ? (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <br></br>
            <TextField
              fullWidth
              id="tag"
              name="tag"
              label="Tag"
              value={formik.values.tag}
              onChange={formik.handleChange}
              error={formik.touched.tag && Boolean(formik.errors.tag)}
              helperText={formik.touched.tag && formik.errors.tag}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Otsikko"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="image"
              name="image"
              label="Kuvalinkki"
              value={formik.values.image}
              onChange={formik.handleChange}
              error={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="writer"
              name="writer"
              label="Kirjoittaja"
              value={formik.values.writer}
              onChange={formik.handleChange}
              error={formik.touched.writer && Boolean(formik.errors.writer)}
              helperText={formik.touched.writer && formik.errors.writer}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="lead"
              name="lead"
              label="Ingressi"
              multiline
              value={formik.values.lead}
              onChange={formik.handleChange}
              error={formik.touched.lead && Boolean(formik.errors.lead)}
              helperText={formik.touched.lead && formik.errors.lead}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="text"
              name="text"
              label="Leipäteksti"
              multiline
              value={formik.values.text}
              onChange={formik.handleChange}
              error={formik.touched.text && Boolean(formik.errors.text)}
              helperText={formik.touched.text && formik.errors.text}
            />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">
              Valmis
            </Button>
          </form>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottom: 1,
          }}
        >
          <Typography>{post.title}</Typography>
          <Button onClick={() => setEditMode(true)}>
            <EditIcon />
          </Button>
          <Button onClick={() => deletePost(post.id, post._version)}>
            <DeleteForeverIcon />
          </Button>
        </Box>
      )}
    </>
  );
}
