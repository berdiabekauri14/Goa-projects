# Codewars-ები გვქონდა დასაწერად

def matrixfy(st):
    if len(st) < 1:
        return('name must be at least one letter')
    mat_dim = len(st) ** 0.5
    if int(mat_dim) != mat_dim:
        mat_dim = int(mat_dim) + 1
    else:
        mat_dim = int(mat_dim)
    matrix = []
    for row in range(mat_dim):
        if len(st) >= mat_dim:
            matrix.append(list(st[:mat_dim]))
        else:
            matrix.append(list(st) + ['.'] * (mat_dim - len(st)))
        st = st[mat_dim:]
    return matrix