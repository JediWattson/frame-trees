import { 
    FrameContainer, 
    FrameImage, 
    FrameButton, 
    getFrameMessage, 
    useFramesReducer, 
    getPreviousFrame, 
    validateActionSignature, 
    FrameInput 
} from "frames.js/next/server";

const reducer = (state, action) => {};

export default async function Home(props) {
    const prevFrame = getPreviousFrame(props.searchParams);
    const frameMsg = getFrameMessage(prevFrame.postBody);

    const [state, dispatch] = useFramesReducer(reducer, {}, prevFrame)

    return (
        <FrameContainer postUrl="/frames" state={state} previousFrame={prevFrame}>
            <FrameImage src="https://picsum.photos/seed/frames.js/1146/600" />
            <FrameInput text="put some text here" />
        </FrameContainer>
    )
}