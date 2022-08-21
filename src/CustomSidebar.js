import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";

export function CustomSidebar(props) {
  const [visible, setVisible] = useState();

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  return (
    <div className="col-md-12">
      <Sidebar
      style={{width:'35em'}}
        {...props}
        key={1}
        visible={visible}
        onHide={() => props.setVisible(false)}
        icons={() => (
          <React.Fragment>
            <div className="w-100">
              <h4 className="m-0">{props.title}</h4>
            </div>
          </React.Fragment>
        )}
      >
        {props.content}
      </Sidebar>
    </div>
  );
}

export default CustomSidebar;
