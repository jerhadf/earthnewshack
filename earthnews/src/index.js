// create a new react client 

import { ConvexProvider, ConvexReactClient } from "convex/react";
const deploymentURL = process.env.VITE_CONVEX_URL;
const convex = new ConvexReactClient(deploymentURL);