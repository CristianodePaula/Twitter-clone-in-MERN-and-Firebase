import express from 'express'
import {
    createPost,
    readPosts, 
    readPostById, 
    updatePost, 
    deletePost
} from '../controllers/post.js'

const router = express.Router()

router.post("/", createPost)
router.get("/", readPosts)
router.get("/:id", readPostById)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

export default router 
