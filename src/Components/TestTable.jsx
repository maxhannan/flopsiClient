import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, IconButton } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { Box } from "@mui/system";
import { purple } from "@mui/material/colors";

export default function BasicTable({ rows, handleToggle }) {
  console.log(rows);
  if (rows) {
    return (
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ maxHeight: "65vh" }}
      >
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => {
              if (row.name.length > 0 && row.saved) {
                return (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell padding="checkbox" component="th" scope="row">
                      <IconButton
                        size="small"
                        onClick={() => handleToggle(row.id, rows)}
                      >
                        <MdEdit />
                      </IconButton>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1rem",
                        color: `${purple[500]}`,
                        fontWeight: "bold",
                      }}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1rem" }} align="right">
                      {row.qty}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1rem" }} align="right">
                      {row.unit}
                    </TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
