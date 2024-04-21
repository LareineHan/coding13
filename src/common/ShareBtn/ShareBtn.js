import { Share } from "../HeartBtn/Icons";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export const CopyUrlBtn = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Press to Copy URL
    </Tooltip>
  );
  const copyUrl = () => {
    try {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
    } catch (error) {
      console.log(error, "copyUrl-error");
    }
  };
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <div className="shatBtn" onClick={copyUrl}>
        <Share size={20} color="#4C4E5D" />
      </div>
    </OverlayTrigger>
  );
};
