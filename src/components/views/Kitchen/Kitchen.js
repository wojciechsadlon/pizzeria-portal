import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '3', status: 'new', product: 'pizza neapolitana', extras: ['olives', 'tuna'], order: 123},
  {id: '4', status: 'preparing', product: 'spaghetti carbonara', extras: [], order: 234},
  {id: '5', status: 'preparing', product: 'pizza diabolo', extras: ['without pepper'], order: 345},
  {id: '6', status: 'new', product: 'greek salad', extras: ['vinegar'], order: 456},
];

const renderActions = status => {
  switch (status) {
    case 'new':
      return (
        <>
          <Button>start preparing</Button>
        </>
      );
    case 'preparing':
      return (
        <Button>ready</Button>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order nr</TableCell>
          <TableCell>Table nr / Pickup nr</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Extras</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Completion</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.product}
            </TableCell>
            <TableCell>
              {row.extras.toString().replace(',', ', ')}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;

