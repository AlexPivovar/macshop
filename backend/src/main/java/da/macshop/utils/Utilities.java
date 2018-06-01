package da.macshop.utils;

import java.time.format.DateTimeFormatter;

public class Utilities {
    private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public static DateTimeFormatter getFormatter() {
        return formatter;
    }

    public static void setFormatter(DateTimeFormatter formatter) {
        Utilities.formatter = formatter;
    }
}
