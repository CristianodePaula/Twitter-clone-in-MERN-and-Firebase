import React, { useState, useEffect, useRef } from 'react'
import {
    Container,
    UserBox,
    UserImg,
    EveryOne,
    Input,
    ShareBox,
    IconBox,
    Icon,
    Button,
    Line
} from './PostShareStyle'
import {
    AiOutlineFileGif,
    AiOutlineSchedule
} from "react-icons/ai"
import {
    RiImage2Line,
    RiBarChartHorizontalFill,
    RiEmotionHappyLine
} from "react-icons/ri"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { IoIosArrowDown } from "react-icons/io"
import axios from 'axios'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage"
import app from "../../resources/Firebase"

const PostShare = () => {

    const [img, setImg] = useState(undefined)
    const [inputs, setInputs] = useState({})
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPerc, setVideoPerc] = useState(0);
    const imageRef = useRef()

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    };

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setInputs((prev) => {
                return { ...prev, [urlType]: downloadURL };
              });
            });
          }
        );
      };

   
    useEffect(() => {
        img && uploadFile(img, "image")
    }, [img])

    const handleUpload = async (e) => {
        e.preventDefault()
        await axios.post("/post", { ...inputs })
    }

    return (
        <Container>
            <UserBox>
                <div style={{ display: 'flex' }}>
                    <UserImg src='https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    <EveryOne>
                        EveryOne
                        <IoIosArrowDown />
                    </EveryOne>
                </div>
                <Input
                    placeholder="Description"
                    name="desc"
                    rows={8}
                    onChange={handleChange}
                />
            </UserBox>
            <ShareBox>
                <IconBox>
                    <Icon>
                        <RiImage2Line
                            onClick={() => imageRef.current.click()}
                        />
                    </Icon>
                    <Icon>
                        <AiOutlineFileGif />
                    </Icon>
                    <Icon>
                        <RiBarChartHorizontalFill />
                    </Icon>
                    <Icon>
                        <RiEmotionHappyLine />
                    </Icon>
                    <Icon>
                        < AiOutlineSchedule />
                    </Icon>
                    <Icon>
                        < HiOutlineLocationMarker />
                    </Icon>
                    <Icon>
                        < AiOutlineSchedule />
                    </Icon>
                </IconBox>
                <div>
                    <Button
                        onClick={handleUpload}
                    >Tweet
                    </Button>
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImg(e.target.files[0])}
                />
            </ShareBox>
            <Line />
        </Container>
    )
}

export default PostShare