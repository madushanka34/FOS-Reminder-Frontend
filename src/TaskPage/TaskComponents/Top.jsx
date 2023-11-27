import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import dayLocaleData from "dayjs/plugin/localeData";
import { Calendar, Col, Radio, Row, Select, Typography, theme } from "antd";
dayjs.extend(dayLocaleData);

function Top() {
  const { token } = theme.useToken();
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const wrapperStyle = {
    width: 550,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  

  return (
    <div className="flex relative mt-[5%]  z-50 ">
      <div className="w-[80%] flex justify-center mx-auto space-x-10">
        <div className="w-[50%]">
          <h1 className="text-4xl font-normal text-black font-Lato">
            This Page gives you to your Examination duty
          </h1>
          <p className="text-lg font-normal text-black font-Lato">
            You can request to change the time slot or suggest other lecturer to
            participate in the examination.
          </p>
          <p className="text-lg font-normal text-black font-Lato">
            Also, you can keep a to-do list on this website.
          </p>
        </div>
        {/* <div className="bg-white rounded-lg h-[250px] w-[400px]"> */}
        <div
          style={wrapperStyle}
          // style={{
          //   width: "550px",
          //   border: "1px solid rgb(240, 240, 240) !important",
          //   borderRadius: "8px !important",
          // }}
        >
          <Calendar
            fullscreen={false}
            headerRender={({ value, type, onChange, onTypeChange }) => {
              const start = 0;
              const end = 12;
              const monthOptions = [];
              let current = value.clone();
              const localeData = value.localeData();
              const months = [];
              for (let i = 0; i < 12; i++) {
                current = current.month(i);
                months.push(localeData.monthsShort(current));
              }
              for (let i = start; i < end; i++) {
                monthOptions.push(
                  <Select.Option key={i} value={i} className="month-item">
                    {months[i]}
                  </Select.Option>
                );
              }
              const year = value.year();
              const month = value.month();
              const options = [];
              for (let i = year - 10; i < year + 10; i += 1) {
                options.push(
                  <Select.Option key={i} value={i} className="year-item">
                    {i}
                  </Select.Option>
                );
              }
              return (
                <div
                  style={{
                    padding: 8,
                  }}
                >
                  <Typography.Title level={4}>Custom header</Typography.Title>
                  <Row gutter={8}>
                    <Col>
                      <Radio.Group
                        size="small"
                        onChange={(e) => onTypeChange(e.target.value)}
                        value={type}
                      >
                        <Radio.Button value="month">Month</Radio.Button>
                        <Radio.Button value="year">Year</Radio.Button>
                      </Radio.Group>
                    </Col>
                    <Col>
                      <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        className="my-year-select"
                        value={year}
                        onChange={(newYear) => {
                          const now = value.clone().year(newYear);
                          onChange(now);
                        }}
                      >
                        {options}
                      </Select>
                    </Col>
                    <Col>
                      <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        value={month}
                        onChange={(newMonth) => {
                          const now = value.clone().month(newMonth);
                          onChange(now);
                        }}
                      >
                        {monthOptions}
                      </Select>
                    </Col>
                  </Row>
                </div>
              );
            }}
            onPanelChange={onPanelChange}
          />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Top;