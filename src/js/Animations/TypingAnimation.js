async function TypingAnimation(setSequenceIndex,
                               setCurSubSequenceIndex,
                               titleIndex,
                                    sequence=["Hello World"],
                                        WRITING_SPEED=100,
                                            WAIT_CHANGE_SPEED=690,
                                                DELETE_SPEED=69) {
    let i=0;
    if (titleIndex < sequence.length) {
        let frameProceed = ()=>(new Promise((resolve)=>{
            setTimeout(()=>{
                setCurSubSequenceIndex(prev=>(prev+1));
                resolve();
            }, WRITING_SPEED);
        }));
        while (i < sequence[titleIndex].length) {
            await frameProceed();
            i++;
        }
        if (titleIndex < sequence.length-1) {
            frameProceed = ()=>(new Promise((resolve)=>{
                setTimeout(()=>{resolve();}, WAIT_CHANGE_SPEED);
            }));
            await frameProceed();
            frameProceed = ()=>(new Promise((resolve)=>{
                setTimeout(()=>{
                    setCurSubSequenceIndex(prev=>(prev-1));
                    resolve();
                }, DELETE_SPEED);
            }));
            while (i > 0) {
                await frameProceed();
                i--;
            }
            frameProceed = ()=>(new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, WRITING_SPEED);
            }));
            await frameProceed();
            setSequenceIndex(titleIndex+1);
            TypingAnimation(setSequenceIndex,
                                setCurSubSequenceIndex,
                        titleIndex+1,
                                        sequence,
                                        WRITING_SPEED,
                                            WAIT_CHANGE_SPEED,
                                                DELETE_SPEED);
        }
    }
}
export default TypingAnimation;