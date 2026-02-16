"use client";

import TelegramIcon from "@mui/icons-material/Telegram";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import { TELEGRAM_URL } from "@/constants/configs";
import { useTranslator } from "@/hooks/useTranslator";

interface TransferSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export const TransferSuccessModal = ({
  open,
  onClose,
}: TransferSuccessModalProps) => {
  const translate = useTranslator();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: 700 }}>
        {translate("transferSuccessTitle")}
      </DialogTitle>
      <DialogContent>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "text.secondary" }}
        >
          {translate("transferSuccessMessage")}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ flexDirection: "column", gap: 1, pb: 3, px: 3 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<TelegramIcon />}
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            background:
              "linear-gradient(135deg, rgb(227,171,41), rgb(66,2,112))",
            color: "#fff",
          }}
        >
          {translate("transferSuccessCtaTelegram")}
        </Button>
        <Button variant="text" fullWidth onClick={onClose}>
          {translate("transferSuccessClose")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
