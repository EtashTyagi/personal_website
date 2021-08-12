export default class GameThread {
    constructor(xState, yState, setYVelocity, leftState, rightState, jumpState,
                TUNNEL_X_RANGES=[],
                TUNNEL_Y_ASPECT=1.275,
                TUNNEL_PADDING=2,
                SCENE_WIDTH=50,
                PLAYER_WIDTH=30,
                X_SPEED=150,
                GRAVITY=1000,
                JUMP_VELOCITY=500) {
        this.xState=xState;
        this.yState=yState;
        this.setYVelocity=setYVelocity;
        this.leftState=leftState;
        this.rightState=rightState;
        this.jumpState=jumpState;
        this.running=true;
        this.TUNNEL_X_RANGES=TUNNEL_X_RANGES;
        this.TUNNEL_Y_ASPECT=TUNNEL_Y_ASPECT;
        this.TUNNEL_PADDING=TUNNEL_PADDING;
        this.SCENE_WIDTH=SCENE_WIDTH;
        this.PLAYER_WIDTH=PLAYER_WIDTH;
        this.X_SPEED=X_SPEED;
        this.GRAVITY=GRAVITY;
        this.JUMP_VELOCITY=JUMP_VELOCITY;
    }
    async start() {
        let x = 0, y = 0;
        let prevTime=Date.now();
        const frame = () =>(
            new Promise(resolve => {
                setTimeout(()=>{
                    let delay=(Date.now()-prevTime)/1000.0;
                    prevTime=Date.now();
                    let newYVel = 0;
                    this.setYVelocity((prevVel) => (newYVel = prevVel - this.GRAVITY*delay));
                    this.yState[1]((prevY) => {
                        y = prevY + newYVel*delay;
                        let aboveTunnel = -1;
                        for (let i = 0; i < this.TUNNEL_X_RANGES.length && aboveTunnel===-1; ++i) {
                            let curTunRange = this.TUNNEL_X_RANGES[i];
                            aboveTunnel = (y <= this.TUNNEL_Y_ASPECT.to*(this.TUNNEL_X_RANGES[i].length())
                                && prevY >= this.TUNNEL_Y_ASPECT.to*(this.TUNNEL_X_RANGES[i].length())
                                && (x + this.PLAYER_WIDTH >= curTunRange.from
                                    && x <= curTunRange.to))?i:-1;
                        }
                        aboveTunnel = newYVel <= 0 ? aboveTunnel: -1;
                        if ((y <= 0 && x <= this.SCENE_WIDTH) || aboveTunnel!==-1) {
                            this.jumpState[1]((jumping) => {
                                if (jumping) {
                                    this.setYVelocity(() => (this.JUMP_VELOCITY))
                                } else {
                                    this.setYVelocity(() => 0);
                                }
                                return jumping;
                            })
                            return y = (y <= 0 ? 0 : this.TUNNEL_Y_ASPECT.to *(this.TUNNEL_X_RANGES[aboveTunnel].length()));
                        }
                        return y;
                    })
                    this.leftState[1]((prevL) => {
                        this.rightState[1]((prevR) => {
                            this.xState[1]((prevX) => {
                                x = prevX;
                                if (prevR && !prevL) {
                                    x = Math.min(prevX + this.X_SPEED*delay, this.SCENE_WIDTH - this.PLAYER_WIDTH - this.TUNNEL_PADDING);
                                } else if (prevL && !prevR) {
                                    x = Math.max(prevX - this.X_SPEED*delay, this.TUNNEL_PADDING);

                                }
                                for (let i = 0; i < this.TUNNEL_X_RANGES.length; ++i) {
                                    let curTunRange = this.TUNNEL_X_RANGES[i];
                                    if (x >= curTunRange.from-this.PLAYER_WIDTH-this.TUNNEL_PADDING
                                        && x <= curTunRange.to+this.TUNNEL_PADDING
                                        && y < this.TUNNEL_Y_ASPECT.to*(this.TUNNEL_X_RANGES[i].length())) {
                                        return (x - curTunRange.from - this.TUNNEL_PADDING
                                        > curTunRange.to - x + this.TUNNEL_PADDING ?
                                            curTunRange.to + this.TUNNEL_PADDING:
                                            curTunRange.from - this.PLAYER_WIDTH - this.TUNNEL_PADDING);
                                    }
                                }
                                return x;
                            })
                            return prevR;
                        })
                        return prevL;
                    })
                    resolve();
                }, 1)
            })
        )
        while (this.running) {
            await frame();
        }
    }
    stop() {
        this.running=false;
    }
}