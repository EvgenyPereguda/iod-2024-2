
import { useParams } from "react-router-dom";
import { useData } from "../hooks/useData";
import { useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Select, MenuItem, Divider, FormControl } from "@mui/material";

export function PostList() {
    const [searchParams, setSearchParams] = useSearchParams(); // import this hook
    const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
    const postsData = useData(
      "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
    );
    const handleChangeLimit = (e) => {
      setSearchParams({ limit: e.target.value });
    };
    
    const postList = postsData?.map((post) => (
  
      <Card sx={{ maxWidth: 345 }} key={post.key}>
        <CardActionArea href={"/posts/" + post.id}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Post #{post.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  
    ));
    return (
        <Box >
            {postList?(

                <Grid container spacing={4}>
                {postList}
                </Grid>
            ) : (
                <Card sx={{ maxWidth: 345}} >
                    Loading ...
                </Card>
            )}
    
            <Box padding={'0.5em'}>
                
                <FormControl>
                    Select limit:
                <Select value={limit} onChange={handleChangeLimit}>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
                </FormControl>
            </Box>
        </Box>
    );
  }
  
  export function Post() {
    const { id } = useParams(); // custom hook to access dynamic params
    const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
    return (
  
      <Card sx={{ maxWidth: 345}} >
        {post ? (        
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Post #{post.id}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {post.title}
            </Typography>
            <Divider/>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
        ) : (
          "Loading ..."
        )}
      </Card>
  
    );
  }
  