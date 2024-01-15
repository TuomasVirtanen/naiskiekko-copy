import { createPosts } from "../../graphql/mutations";
import { useFormik } from "formik";
import { API } from "aws-amplify";

import { TextField, Button } from "@mui/material";

type PostAddFormProps = {
  onAddPost: () => void;
};

export default function PostAddForm({ onAddPost }: PostAddFormProps) {
  const formik = useFormik({
    initialValues: {
      tag: "Muu",
      title: "Otsikko",
      image: "",
      writer: "Kirjoittaja",
      lead: "Ingressi",
      text: "Leipäteksti",
    },
    onSubmit: async (values) => {
      const postData = {
        tag: values.tag,
        title: values.title,
        image: values.image,
        writer: values.writer,
        lead: values.lead,
        text: values.text,
      };
      try {
        await API.graphql({
          query: createPosts,
          variables: { input: postData },
        });
        await onAddPost();
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <br></br>
        <TextField
          fullWidth
          id="tag"
          name="tag"
          label="Tag"
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
          label="Kuvalinkki (esimerkki.jpg)"
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
          onChange={formik.handleChange}
          error={formik.touched.text && Boolean(formik.errors.text)}
          helperText={formik.touched.text && formik.errors.text}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Lisää uutinen
        </Button>
      </form>
    </div>
  );
}
