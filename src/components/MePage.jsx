import PropTypes, { checkPropTypes } from "prop-types";
import React from "react";
import useMe from "../hooks/useMe";
import Loading from "../components/Loading";
import { Content } from "../styles/components/mePage";

const MePage = () => {
  const me = useMe();
  if (me.length > 0) {
    return (
      <div>
        <Content>
          <h1 className="primary-title">Florent Largeron</h1>
          {me[0]}
        </Content>
        ;
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default MePage;
