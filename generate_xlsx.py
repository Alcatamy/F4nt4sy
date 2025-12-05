import pandas as pd

# Read the CSV with the correct encoding
df = pd.read_csv('movimientos_completo.csv', encoding='utf-8-sig')

# Create Excel writer object
output_file = 'movimientos_completo.xlsx'
writer = pd.ExcelWriter(output_file, engine='openpyxl')

# Write dataframe to Excel
df.to_excel(writer, index=False, sheet_name='Movimientos')

# Get workbook and worksheet objects
workbook = writer.book
worksheet = writer.sheets['Movimientos']

# Adjust column widths
for i, col in enumerate(df.columns):
    column_len = max(df[col].astype(str).map(len).max(), len(col)) + 2
    worksheet.column_dimensions[chr(65 + i)].width = column_len

# Add filters
worksheet.auto_filter.ref = worksheet.dimensions

writer.close()
print(f"Generated {output_file}")
