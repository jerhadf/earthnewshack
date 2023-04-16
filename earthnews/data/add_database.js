// add item to database

// `friends` table doesn't exist.
await db.insert("friends", { name: "Jamie" });
// Now it does, and it has one document.

// tables contain documents - here are examples of document
// {}
// {"name": "Jamie"}
// {"name": {"first": "Arnold", "second": "Cole": 61}

// document format for our purposes, using the fields - id,body,headline,article_name,date_published,date_uploaded,summary,explanation,address,lat,lon
document = {
  article_id: {
    body: "body",
    headline: "headline",
    article_name: "article_name",
    date_published: "date_published",
    date_uploaded: "date_uploaded",
    summary: "summary",
    explanation: "explanation",
    address: "address",
    lat: "lat",
    lon: "lon",
  },
};

// given a single document's ID, read its data with db.get
export default query(async ({ db }, { taskId }) => {
  const task = await db.get(taskId);

  // using the Convex framework and the document format above, get the latitude and longitude of a document
  const task2 = await db.get(taskId);
  return task.lat + "," + task.lon;
});

// you can then filter, order, and await the results - see https://docs.convex.dev/database/reading-data

// use db.insert to add things

// Every document in convex has a globally unique document ID that is automatically generated by the system.
// access the id with the _id field

// You can use this ID to always issue a very efficient point query within your functions using the get method:
const retrievedUser = await db.get(documentId);

// allow users to upload files and images and articles with HTTP endpoint


// deprecated app.jsx content
<div className="hero">
  {/* Header with EarthNews title */}
  <div className="earth-news">
    {/* Design ideas: 
          Parallax effect
          Complex gradient + image
          Memphis design 
           */}
    <h1 className="title">PLANET PULSE</h1>
    <p className="desc">
      A tool to aggregate and summarize climate news from around the world
    </p>
    {/* Search bar for climate news */}
    <div className="search-bar">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 500,
          maxWidth: "100%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search For a Location"
          inputProps={{ "aria-label": "search for a location" }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={scrollToMap} // on click, scroll to the map
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  </div>
</div>;
