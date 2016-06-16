import React from "react";

import {
  Heading,
  Link,
  Slide,
  Text
} from "spectacle";

export default class SlideContent extends React.Component {
    render(){        
        return (      
            <Slide {...this.props} bgColor="primary" >
                <Heading size={1} fit caps lineHeight={1} textColor="black">
                Spectacle
                </Heading>
                <Heading size={1} fit caps>
                A ReactJS Presentation Library
                </Heading>
                <Heading size={1} fit caps textColor="black">
                Where You Can Write Your Decks In JSX
                </Heading>
                <Link href="https://github.com/FormidableLabs/spectacle">
                <Text bold caps textColor="tertiary">View on Github</Text>
                </Link>
                <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>         
        )
    }
}