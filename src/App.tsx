import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import personsList, { fieldTypes, personObj } from "./personsList";
import sort from "./functions";
import { ReactComponent as AscIcon } from "./icons/sortAsc.svg";
import { ReactComponent as DescIcon } from "./icons/sortDesc.svg";
import { Stack } from "react-bootstrap";

function App() {
  const [config, setConfig] = useState({
    list: [...personsList],
    selectedSortField: "",
    isAscending: true,
  });

  const handleSort = (field: fieldTypes) => {
    if (config.selectedSortField === field)
      setConfig({
        ...config,
        list: sort(field, !config.isAscending),
        isAscending: !config.isAscending,
      });
    else
      setConfig({
        list: sort(field, true),
        selectedSortField: field,
        isAscending: true,
      });
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <h1 className="mb-5">
        Sortable table of persons with their favorite things
      </h1>
      <Table bordered hover className="table-default">
        <thead>
          <tr>
            <th className="text-bg-success" onClick={() => handleSort("Name")}>
              <Stack direction="horizontal">
                Name
                {config.selectedSortField === "Name" &&
                  (config.isAscending ? (
                    <AscIcon className="ms-auto" />
                  ) : (
                    <DescIcon className="ms-auto" />
                  ))}
              </Stack>
            </th>
            <th
              className="text-bg-success"
              onClick={() => handleSort("Favorite Food")}
            >
              <Stack direction="horizontal" gap={3}>
                Favorite Food
                {config.selectedSortField === "Favorite Food" &&
                  (config.isAscending ? (
                    <AscIcon className="ms-auto" />
                  ) : (
                    <DescIcon className="ms-auto" />
                  ))}
              </Stack>
            </th>
            <th
              className="text-bg-success"
              onClick={() => handleSort("Favorite Movie")}
            >
              <Stack direction="horizontal" gap={3}>
                Favorite Movie
                {config.selectedSortField === "Favorite Movie" &&
                  (config.isAscending ? (
                    <AscIcon className="ms-auto" />
                  ) : (
                    <DescIcon className="ms-auto" />
                  ))}
              </Stack>
            </th>
            <th
              className="text-bg-success"
              onClick={() => handleSort("Status")}
            >
              <Stack direction="horizontal">
                Status
                {config.selectedSortField === "Status" &&
                  (config.isAscending ? (
                    <AscIcon className="ms-auto" />
                  ) : (
                    <DescIcon className="ms-auto" />
                  ))}
              </Stack>
            </th>
          </tr>
        </thead>
        <tbody>
          {config.list.map((person: personObj) => {
            return (
              <tr key={person.Name}>
                <td>{person.Name}</td>
                <td>{person["Favorite Food"]}</td>
                <td>{person["Favorite Movie"]}</td>
                <td
                  className={
                    person.Status === "Active" ? "text-success" : "text-danger"
                  }
                >
                  {person.Status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
