// Credit to MUI for the basis of this template
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';

import post1 from './post1.md.js';
import post2 from './post2.md.js';

import withLayout from '../../app/navigation/withLayout';

const sections = [];

const mainFeaturedPost = {
  title: 'Gain a better understanding of Seattle\'s homeless crisis and how to help',
  description:
    "By providing our users with different perspectives and reports from around the city, we hope to increase awareness and education about the homelessness crisis that Seattle is facing. ",
  image: 'https://komonews.com/resources/media2/16x9/full/1015/center/80/45ebe8f2-20f5-424b-a35c-b0e062c787b6-large16x9_E7_vvmSVgAQ6plL.jpg',
  imageText: 'Space neddle with homeless camps in the foreground',
  linkText: '',
};

const posts = [post1, post2];

const theme = createTheme();

const InformationResource = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Informational Resources" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Latest Resources and Information" posts={posts} />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default withLayout(InformationResource)
