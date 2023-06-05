import express, { Request, Response, Router } from "express";
import Post from "../models/post";

const router: Router = express.Router();

router.post("/createPost", async (req: Request, res: Response) => {
  const { content } = req.body;

  if (!content) {
    res.status(400).json({ message: "Content is required" });
    return;
  }

  try {
    await Post.create({
      content: content,
      creator: "test",
      likes: [],
      createdAt: new Date(),
      replies: [],
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error: ${err.message}`);
    } else {
      console.error(`An unexpected error occurred: ${err}`);
    }
  }

  res.status(200).json({ message: "Post created" });
});

router.get("/getPosts", async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error: ${err.message}`);
    } else {
      console.error(`An unexpected error occurred: ${err}`);
    }
  }
});

router.post("/vote", async (req: Request, res: Response) => {
  const { postId, voteType } = req.body;

  if (!postId || !voteType) {
    res.status(400).json({ message: "Post ID and vote type are required" });
    return;
  }

  try {
    if (voteType === "like") {
      await Post.findByIdAndUpdate(postId, {
        $addToSet: { likes: "test" },
      });
    } else if (voteType === "dislike") {
      await Post.findByIdAndUpdate(postId, {
        $pull: { likes: "test" },
      });
    }

    res.status(200).json({ message: "Vote successful" });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error: ${err.message}`);
    } else {
      console.error(`An unexpected error occurred: ${err}`);
    }
  }
});

router.post("/reply", async (req: Request, res: Response) => {
  const { postId, reply } = req.body;

  if (!postId || !reply) {
    res.status(400).json({ message: "Post ID and reply are required" });
    return;
  }

  try {
    await Post.findByIdAndUpdate(postId, {
      $addToSet: { replies: reply },
    });
    res.status(200).json({ message: "Reply successful" });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error: ${err.message}`);
    } else {
      console.error(`An unexpected error occurred: ${err}`);
    }
  }
});
export default router;
