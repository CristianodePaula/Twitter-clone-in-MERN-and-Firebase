import Post from '../model/Post.js'

export const createPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body)
    await newPost.save()
    res.status(200).json("Post criado com sucesso")
  } catch (err) {
    next(err)
  }
}

export const readPost = async (req, res, next) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (err) {
    next(err)
  }
}

export const readPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    next(err)
  }
}

export const updatePost = async (req, res, next) => {
  try {
    await Post.findByIdAndUpdate(req.params.id,
      { $set: req.body },
      { new: true })
    res.status(200).json("Post atualizado com sucesso")
  } catch (err) {
    next(err)
  }
}

export const deletePost = async (req, res, next) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.status(200).json('Post deletado com sucesso')
  } catch (err) {
    next(err)
  }
}


